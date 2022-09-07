import React from 'react'

export const Api = async (url) => {
 const res = await fetch(url)
 const data = await res.json()
 return data;
}

// module.exports={
//     Api:Api
// }