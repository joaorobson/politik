import unicodedata
import string
from wordcloud import WordCloud
from nltk.corpus import stopwords
from collections import Counter


preposicoes = ['a', 'ante', 'ate', 'apos','com', 'contra', 'de', 'desde',
               'em', 'entre', 'para', 'per', 'por', 'perante', 'sem', 'sob', 
               'sobre', 'tras']
combinacoes = ["ao", "aos", "as", "do", "dos", "da", "das", "dum", "duns", "duma", "dumas", "no", "nos", "na", "nas", "num", "nuns", "numa", "numas", "pelo", "pelos", "pela", "pelas"]
             

artigos = ['a', 'o', 'as', 'os', 'um', 'uns', 'uma', 'umas','e', 'que']

nomes = ['bolsonaro2018', 'haddad', 'luiz', 'inacio', 'lula', 'silva', 'mais', 'se', 'acima']

nao_substantivos = preposicoes + artigos + nomes + combinacoes + stopwords.words('portuguese')
def remove_accents(s):
    return(''.join(c for c in unicodedata.normalize('NFKD', s) if c in string.printable[10:62] or c == ' ' or c == '\n')).lower()

def read_file(f):
    text = f.read()
    text = remove_accents(text)
    bla = (text.split())
    bla = [i for i in text.split() if i not in nao_substantivos]
    response = [{'word':i, 'value':bla.count(i)} for i in set(bla)]
    print(f.name)
    a = open(f.name + str(1) ,'w')
    a.write(str(response))
    a.close()
    text = ' '.join([i for i in text.split() if i not in nao_substantivos])
    return text

if __name__ == '__main__':
    f = open('bolsonaro.txt','r')
    text1 = (read_file(f))
    f.close()
    f2 = open('haddad.txt','r')
    text2 = (read_file(f2))
    f2.close()
    f3 = open('ciro.txt','r')
    text3 = (read_file(f3))
    f3.close()
    f4 = open('amoedo.txt','r')
    text4 = (read_file(f4))
    f4.close()
    f5 = open('alckmin.txt','r')
    text5 = (read_file(f5))
    f5.close()
    wordcloud1 = WordCloud().generate(text1)
    wordcloud2 = WordCloud().generate(text2)
    wordcloud3 = WordCloud().generate(text3)
    wordcloud4 = WordCloud().generate(text4)
    wordcloud5 = WordCloud().generate(text5)
    #a = text.split()
    import matplotlib.pyplot as plt
    plt.figure(1)
    plt.title('bolsonaro')
    plt.imshow(wordcloud1, interpolation='bilinear')
    plt.axis("off")
    wordcloud1 = WordCloud(max_font_size=40).generate(text1)
    plt.imshow(wordcloud1, interpolation="bilinear")
    plt.axis("off")

    # lower max_font_size
    plt.figure(2)
    plt.imshow(wordcloud2, interpolation='bilinear')
    plt.axis("off")
    wordcloud2 = WordCloud(max_font_size=40).generate(text2)
    plt.imshow(wordcloud2, interpolation='bilinear')
    plt.axis("off")

    plt.figure(3)
    plt.imshow(wordcloud3, interpolation='bilinear')
    plt.axis("off")
    wordcloud2 = WordCloud(max_font_size=40).generate(text3)
    plt.imshow(wordcloud3, interpolation='bilinear')
    plt.axis("off")

    plt.figure(4)
    plt.imshow(wordcloud4, interpolation='bilinear')
    plt.axis("off")
    wordcloud2 = WordCloud(max_font_size=40).generate(text4)
    plt.imshow(wordcloud4, interpolation='bilinear')
    plt.axis("off")

    plt.figure(5)
    plt.imshow(wordcloud5, interpolation='bilinear')
    plt.axis("off")
    wordcloud2 = WordCloud(max_font_size=40).generate(text5)
    plt.imshow(wordcloud5, interpolation='bilinear')
    plt.axis("off")

    plt.show()
