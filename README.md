
# Weather App

An app to check the weather

## Uses
- [ReactJS](https://reactjs.org/) UI library
- [Redux toolkit](https://redux-toolkit.js.org/) state management library
- [Jest](https://jestjs.io/) for unit testing
- [Enzyme](https://enzymejs.github.io/enzyme/) for react components testing
- [React testing library](https://testing-library.com/) for react components and hooks testing
- [MUI](https://mui.com/) component library
- [Recharts](https://recharts.org/) data visualization framework
- [D3 date formating library](https://github.com/d3/d3-time-format)

## Features
- A **loading screen** is shown when loading the application
- A **weather dashboard** that includes a 5 days weather forecast and,
    - **Temperature scale switch** to switch between Fahrenheit and Celcius
    - **Refresh button** to reload the weather forecast data
    - **Weather cards** to display weather forecast information
        - Temperature
        - Weather icon
        - Weather description
        - Forecast time
        - Forecast day
    - **A slider** for the weather cards
    - The slider **progress indicator**
    - A **home button** to slide to the first card
    - A **bar chart** for temperature data visualization. The barchart is shown once a card has been selected

## Other Technical Features
- Uses git version control
- Hosted on netlify
- React:
    - Error boundaries to handle any runtime errors
    - React hooks
    - Single responsibility principle
    - React memoization
- Redux:
    - Uses redux toolkit framework for state management
    - Uses RTK Query for data fetching, which has been configured to store data to Redux
- Responsivity
    - Uses Javascript hence the rensposivity is adjusted when loading the application
    - Shows 3 weather cards when on desktop and 1 card when on mobile

## Design
- Uses material design
- UI Accessibility
- Proper data values formatting
## Authors

- [@stevndegwa](https://github.com/StevNdegwa)

