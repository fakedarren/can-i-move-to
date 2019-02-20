module.exports = {

  log: obj => JSON.stringify(obj, null, '\t'),

  'tweet-content': () => "Can I move to Barcelona? What about Athens? Prague? Copenhagen? Vienna? Paris? If Brexit happens, we UK citizens will lose our #freedomofmovement - the right to move anywhere in the EU, no matter our age, income or working status. Find out more on canImovetobarcelona.com #LoveEU".replace(/\s+/gi, '%20')

};