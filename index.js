/* @flow */

/* ::
  type Quux = ({foo: string, baz: string} & Array<any>)
*/

const assign /* : Function */ = require('object-assign')

function Q() /* : Quux */ {
  const quux = assign([], {foo: 'bar'})
  return quux
}

Q().foo
Q().baz
Q().push(1)
Q().push('a')
Q().quux

module.exports = Q
