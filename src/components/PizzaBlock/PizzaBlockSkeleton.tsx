import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={218}
    height={466}
    viewBox="0 0 218 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="109" cy="102" r="102" /> 
    <rect x="0" y="213" rx="7" ry="7" width="218" height="27" /> 
    <rect x="0" y="247" rx="7" ry="7" width="218" height="89" /> 
    <rect x="0" y="343" rx="7" ry="7" width="80" height="38" /> 
    <rect x="88" y="343" rx="7" ry="7" width="130" height="38" />
  </ContentLoader>
)

export default PizzaBlockSkeleton

