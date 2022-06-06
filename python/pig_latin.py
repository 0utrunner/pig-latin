import re

def translate(word_or_phrase):
  listed = word_or_phrase.split()
  final_phrase = []
  for i in listed:
    seek = re.search('[aeiou]', i[0])
    i = list(i)
    while seek == None:
      if i[0] == 'q':
        i.append(i.pop(0))
        i.append(i.pop(0))
        seek = re.search('[aeiou]', i[0])
      else:
        i.append(i.pop(0))
        seek = re.search('[aeiou]', i[0])
    i.append('ay')
    final_phrase.append(''.join(i))

  return ' '.join(final_phrase)

print(translate('the quick brown fox'))

