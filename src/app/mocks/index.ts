export const csvMock = `Reference,Account Number,Description,Start Balance,Mutation,End Balance
106627,NL46ABNA0625805417,Subscription for Erik de Vries,80.76,-2.23,78.53
112806,NL74ABNA0248990274,Candy from Jan de Vries,109.75,-23.94,85.81
124020,NL27SNSB0917829871,Flowers for Rik Theuﬂ,72.16,-18.94,53.22
170175,NL43AEGO0773393871,Candy for Richard Dekker,11.62,+45.38,57
112806,NL91RABO0315273637,Subscription from Vincent Dekker,68.31,-6.31,62
112806,NL91RABO0315273637,Clothes from Richard Theuﬂ,31.03,+0.27,31.3
158644,NL90ABNA0585647886,Clothes for Willem Dekker,98.5,-42.77,55.73
181855,NL93ABNA0585619023,Flowers for Rik King,106.92,+8.29,115.21
131702,NL91RABO0315273637,Tickets from Rik Theuﬂ,109.68,-21.68,88
184927,NL43AEGO0773393871,Flowers for Richard Dekker,42.43,-43.43,-1`;

export const csvReturnObject = [
  {
    reference: 106627,
    accountNumber: 'NL46ABNA0625805417',
    description: 'Subscription for Erik de Vries',
    startBalance: 80.76,
    mutation: -2.23,
    endBalance: 78.53,
  },
  {
    reference: 112806,
    accountNumber: 'NL74ABNA0248990274',
    description: 'Candy from Jan de Vries',
    startBalance: 109.75,
    mutation: -23.94,
    endBalance: 85.81,
  },
  {
    reference: 124020,
    accountNumber: 'NL27SNSB0917829871',
    description: 'Flowers for Rik Theuﬂ',
    startBalance: 72.16,
    mutation: -18.94,
    endBalance: 53.22,
  },
  {
    reference: 170175,
    accountNumber: 'NL43AEGO0773393871',
    description: 'Candy for Richard Dekker',
    startBalance: 11.62,
    mutation: '+45.38',
    endBalance: 57,
  },
  {
    reference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Subscription from Vincent Dekker',
    startBalance: 68.31,
    mutation: -6.31,
    endBalance: 62,
  },
  {
    reference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Clothes from Richard Theuﬂ',
    startBalance: 31.03,
    mutation: '+0.27',
    endBalance: 31.3,
  },
  {
    reference: 158644,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Clothes for Willem Dekker',
    startBalance: 98.5,
    mutation: -42.77,
    endBalance: 55.73,
  },
  {
    reference: 181855,
    accountNumber: 'NL93ABNA0585619023',
    description: 'Flowers for Rik King',
    startBalance: 106.92,
    mutation: '+8.29',
    endBalance: 115.21,
  },
  {
    reference: 131702,
    accountNumber: 'NL91RABO0315273637',
    description: 'Tickets from Rik Theuﬂ',
    startBalance: 109.68,
    mutation: -21.68,
    endBalance: 88,
  },
  {
    reference: 184927,
    accountNumber: 'NL43AEGO0773393871',
    description: 'Flowers for Richard Dekker',
    startBalance: 42.43,
    mutation: -43.43,
    endBalance: -1,
  },
];

export const xmlMock = `<records>
    <record reference="168036">
      <accountNumber>NL91RABO0315273637</accountNumber>
      <description>Tickets for Rik Bakker</description>
      <startBalance>85.69</startBalance>
      <mutation>-19.48</mutation>
      <endBalance>66.21</endBalance>
    </record>
    <record reference="168512">
      <accountNumber>NL90ABNA0585647886</accountNumber>
      <description>Flowers from Peter King</description>
      <startBalance>5429</startBalance>
      <mutation>-939</mutation>
      <endBalance>6368</endBalance>
    </record>
  </records>`;

export const xmlReturnObject = [
  {
    reference: '168036',
    accountNumber: 'NL91RABO0315273637',
    description: 'Tickets for Rik Bakker',
    startBalance: '85.69',
    mutation: '-19.48',
    endBalance: '66.21',
  },
  {
    reference: '168512',
    accountNumber: 'NL90ABNA0585647886',
    description: 'Flowers from Peter King',
    startBalance: '5429',
    mutation: '-939',
    endBalance: '6368',
  },
];
