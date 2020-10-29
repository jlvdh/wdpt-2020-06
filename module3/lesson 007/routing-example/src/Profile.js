import React from 'react'
import querystring from 'query-string';

export default function Profile(props) {
  const {profileName} = props.match.params
  // console.log(props.location.search)
  const values = querystring.parse(props.location.search)
  console.log(values)
  return (
    <div>
      this is the profile of {profileName}
      <div>age: {values.age}</div>
    </div>
  )
}
