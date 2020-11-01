## Wanderlust

A mobile app for travel guide for tourist and travel enthusiast.
Built with ReactNative and powered by Slash GraphQL.

### Inspiration

As a traveler I like to keep track of places to visit and know more about them as I begin my journey to an unexplored city, country or continent.

The app is currently in a MVP stage and over the time more data and feature will be added to it.

**Features**

- Country and City Listing
- Hotels Listing for places
- Hotel Booking
- Chat groups
- Visited places record

### Tech

The is powered by native GraphQL database Slash GraphQL from Dgraph Labs. GraphQL was first choice for the project based on initial features and UI components designs and as the App was built all the features of GraphQL came in handy.

The app is built with ReactNative so that app can be available to both iOS and Android users at earliest. The updated developer experience and power of React make it easy to develop and ship fast.

Apollo is used on Client side to make request to graphQL and providing caching support. Apollo is also used for web socket for graphQL subscriptions to add real-time chat feature. Apollo hooks makes things easy during development.

Auth0 is identity provider and is used to protect GraphQL user endpoint and user data.

###
