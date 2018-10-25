import unicodedata
import string
from wordcloud import WordCloud


preposicoes = ['a', 'ante', 'ate', 'apos','com', 'contra', 'de', 'desde',
               'em', 'entre', 'para', 'por', 'perante', 'sem', 'sob', 
               'sobre', 'tras', 'ao', 'aos', 'do', 'da', 'dos', 'das',
               'na', 'nas', 'no', 'nos']

artigos = ['a', 'o', 'as', 'os', 'um', 'uns', 'uma', 'umas','e', 'que']

nomes = ['bolsonaro2018', 'haddad', 'mais', 'se', 'acima']

nao_substantivos = preposicoes + artigos + nomes
def remove_accents(s):
    return(''.join(c for c in unicodedata.normalize('NFKD', s) if c in string.printable[:62] or c == ' ' or c == '\n')).lower()

def read_file(f):
    text = f.read()
    text = remove_accents(text)
    print(text.split())
    text = ' '.join([i for i in text.split() if i not in nao_substantivos])
    return text

if __name__ == '__main__':
    f = open('bolsonaro.txt','r')
    text1 = (read_file(f))
    f.close()
    f2 = open('haddad.txt','r')
    text2 = (read_file(f2))
    f2.close()
    wordcloud1 = WordCloud().generate(text1)
    wordcloud2 = WordCloud().generate(text2)
    #a = text.split()
    import matplotlib.pyplot as plt
    plt.figure(1)
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
    plt.show()
