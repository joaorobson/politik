import React from "react";
import * as d3 from "d3";
import "./style.css";
import { Header } from 'semantic-ui-react';

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var width = window.innerWidth*0.8;
    var height = window.innerHeight*0.8;

    // append the svg object to the body of the page
    var svg = d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Read data
    d3.csv(
      "https://raw.githubusercontent.com/joaorobson/politik/devel/projects/poverty_headcount/poverty_headcount.csv",
      function(data) {
        return data;
        // Filter a bit the data -> more than 1 million inhabitants
      }
    ).then(data => {
      console.log(data);
      function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }
      // Color palette for continents?
      var color = d3
        .scaleOrdinal()
        .domain(["Asia", "Europe", "Africa", "Oceania", "Americas"])
        .range(d3.schemeSet2);

      // Size scale for countries

      // create a tooltip
      var Tooltip = d3
        .select("#my_dataviz")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("position", "absolute")
        .style("z-index", "42")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px");

      // Three function that change the tooltip when user hover / move / leave a cell
      var mouseover = function(d) {
        Tooltip.style("opacity", 1);
      };
      var mousemove = function(d) {
        Tooltip.html(
          "<u>" +
            d.country_name +
            "</u>" +
            "<br>" +
            formatNumber(parseInt(d.most_recent_value_pop)) +
            " inhabitants<br>" +
            d.most_recent_value_pov +
            " % of population (" +
            formatNumber(parseInt(
              (d.most_recent_value_pov * d.most_recent_value_pop) / 100
            )) +
            " people) living with less than $1.9 per day" +
            "<br>" +
            "(" + parseInt(d.most_recent_year_pov) + ")"
        )
          .style("left", d3.select(this).attr("cx") + "px")
          .style("top", d3.select(this).attr("cy") + "px")
          .style("color", "#737373")
          .style("border", "none");
      };
      var mouseleave = function(d) {
        Tooltip.style("opacity", 0);
      };

      // Initialize the circle: all located at the center of the svg area
      var node = svg
        .append("g")
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", function(d) {
          return d.most_recent_value_pov;
        })
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", function(d) {
          return color(d.continent);
        })
        .style("fill-opacity", 0.8)
        .attr("stroke", "black")
        .style("stroke-width", 0)
        .on("mouseover", mouseover) // What to do when hovered
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .call(
          d3
            .drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

      function zoom_actions() {
        node.attr("transform", d3.event.transform);
      }
      var x = d3
        .scaleOrdinal()
        .domain(["Americas", "Europe", "Africa", "Asia", "Oceania"])
        .range([0, 200, 400, 600, 800]);

      var zoom_handler = d3.zoom().on("zoom", zoom_actions);
      // Features of the forces applied to the nodes:
      var simulation = d3
        .forceSimulation()
        .force(
          "x",
          d3
            .forceX()
            .strength(0.5)
            .x(function(d) {
              return x(d.continent);
            })
        )
        .force(
          "y",
          d3
            .forceY()
            .strength(0.2)
            .y(height / 2)
        )
        .force(
          "center",
          d3
            .forceCenter()
            .x(width / 2)
            .y(height / 2)
        ) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(0.1)) // Nodes are attracted one each other of value is > 0
        .force(
          "collide",
          d3
            .forceCollide()
            .strength(0.5)
            .radius(function(d) {
              return 1.1 * d.most_recent_value_pov;
            })
            .iterations(1)
        );

      // Features of the forces applied to the nodes:
      // Apply these forces to the nodes and update their positions.
      // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
      simulation.nodes(data).on("tick", function(d) {
        node
          .attr("cx", function(d) {
            return (d.x = Math.max(10, Math.min(width - 10, d.x)));
          })
          .attr("cy", function(d) {
            return (d.y = Math.max(10, Math.min(height - 10, d.y)));
          });
      });

      // What happens when a circle is dragged?
      var sx, sy;
      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.01).restart();
        d.fx = d.x;
        d.fy = d.y;
        sx = +d.x;
        sy = +d.y;
      }

      function dragged(d) {
        var current_scale, current_scale_string;
        if (this.getAttribute("transform") === null) {
          current_scale = 1;
        }
        //case where we have transformed the circle
        else {
          current_scale_string = this.getAttribute("transform").split(" ")[1];
          current_scale = +current_scale_string.substring(
            6,
            current_scale_string.length - 1
          );
        }
        d.fx = sx + (d3.event.x - sx) / current_scale;
        d.fy = sy + (d3.event.y - sy) / current_scale;
        //d.fx = Math.max(100, Math.min(width, d3.event.x));
        //d.fy = Math.max(100, Math.min(450, d3.event.y));
      }
      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0.03);
        d.fx = null;
        d.fy = null;
      }
      zoom_handler(svg);
      svg.call(
        zoom_handler.transform,
        d3.zoomIdentity.translate(width / 7, height / 7).scale(0.7)
      );
    });
  }

  render() {
    console.log(document.getElementById("my_dataviz"));
    return (
      <div style={{overflow: 'hidden'}}>
        <Header
          style={{
						marginTop: '3%',
            fontFamily: "Lato",
            letterSpacing: "5px",
            fontWeight: "300",
            fontSize: "28px",
            color: "#b3b3b3"
          }}
          as="h1"
        >
          <Header.Content>
						Poverty headcount ratio at $1.90 a day (2011 PPP)
          </Header.Content>
    <Header.Subheader style={{color: "#cccccc", fontSize: "10px"}}>
      Data source: World Bank<sup><a href="https://data.worldbank.org/indicator/SI.POV.DDAY">[1]</a>
      <a href="https://data.worldbank.org/indicator/SI.POV.DDAY">[2]</a></sup>
    </Header.Subheader>
        </Header>

        <div id={"my_dataviz"} />
      </div>
    );
  }
}

export default BarChart;
