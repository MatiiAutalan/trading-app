
const all = true

export const staticEndpoints = {
'/instruments': [
    {
      all,
    },
  ],
  
'/portfolio': [
    {
      all,
    },
  ],

'/orders': [
    {
      all,
    },
  ],
  
}

export const dynamicEndpoints = [
  {
    url: /^\/search\?query=[\w-]+$/,
    method: 'get',
    all,
  }, 
]