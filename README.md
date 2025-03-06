# React JS
- NPM - npm init

# parcel 
- npm install -D parcel
- npx parcel index.html
- npx parcel build index.html
- npm install react
- npm install react-dom
- start the application
    -     "start": "parcel index.html", -> npm start
    -     "build": "parcel build index.html", --> npm run build

- Dev Build
- Local server
- HMR - hot module Replacemet
- File Watching Algo - written in c++
- Caching - Faster Builds
- Image Optimization
- Building
- Compress
- Consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Laying the Foundamentals
- Bracket pair
- Pretter
- ESLint
- Better Comments


# Two types of Exports/Import

- Default Export / Import

- export default Component
- import Component from "path

- Named Export/Import

- exprot const Component
- import {Component} from "path


# React Hooks
- (Normal JS utility Functions)
- useState() - Superpowerful State 
- useEffect()
- 

# Monolith && Microservises :

# useEffect :
- // if no dependency array => useEffect is called on every render
-    // if the dependency array is empty = [] => useEffect is called on initial render(just Once)
-    // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    
# Shimmer UI :

# Conditional Rendering :-

# Routing:-
- npm install react-router-dom
    - createBrowserRouter([])
    - RouterProvider router={appLoyout}
        -   Outlet
        -   useRouterError
        -   Link tag
        -   Dynamic Routing /:resId
        -   useParams is object we destructure the resId(const {resId} = useParams)

# 2 types Routing in web apps
- Client Side Routing
- Server Side Routing