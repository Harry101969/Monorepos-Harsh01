# This is the demonstration of how we can add a nodejs/express and react application in the same monorepo using turborepo.
Turbo repo here allows us to share the common logic/code that the frontend and backend of an application both require.
This thing i comparatively difficult using normal monorepo's but using turborepo its much easier 
In this repo the /packages/common module shares some code which is used by both the apps/backend(the node application) and apps/react-app(the vite+react application).

## Note : After downloading or cloning this repo simple do:
1) npm install
2) npm run build
3) npm run dev
And all the ports will be activated and u can walk through the simple yet informative project.
