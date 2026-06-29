# Web Development Project 4 - Pokemon Discover

Submitted by: **Sudip Amgain**

This web app: **Pokemon Discover is a React application that allows users to discover random Pokemon using the PokeAPI. Users can view Pokemon information including name, type, height, weight, and official artwork. Users can add Pokemon attributes such as name and type to a ban list, preventing Pokemon with those attributes from appearing in future discoveries. The app also stores a history of previously discovered Pokemon during the session.**

Time spent: **4 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The application includes a **Discover** button that fetches a random Pokemon from the PokeAPI.
  - Each API response displays:
    - Pokemon name
    - Pokemon type
    - Pokemon height
    - Pokemon weight
    - Pokemon official artwork image

- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - The app displays one Pokemon discovery card at a time.
  - The displayed attributes always match the displayed Pokemon image.
  - Each Pokemon result includes an official artwork image from the API response.

- [x] **API call response results should appear random to the user**
  

- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  

## Optional Features

The following **optional** features are implemented:

- [x] **Multiple types of attributes are clickable and can be added to the ban list**
  
- [x] **Users can see a stored history of their previously displayed results from this session**
  
## Additional Features

The following additional features are implemented:

- [x] Loading state while fetching Pokemon data
  
- [x] Component-based React structure
 
- [x] Responsive user interaction
  .

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://github.com/AmgainSudip/flashcard/blob/main/src/walkthrough.gif"/>

GIF created with LiceCap

## Notes

The main challenge encountered while building this project was working with an unfamiliar API and understanding how to parse the returned JSON data. The PokeAPI response contained nested objects and arrays, especially for Pokemon types and images.

Another challenge was implementing the ban list functionality. The application needed to continue fetching Pokemon until it found one that did not contain any banned attributes. This required adding filtering logic after each API request.

Managing multiple React states for the current Pokemon, ban list, loading state, and history was also a challenge. React components were separated to make the application easier to maintain and understand.

## License

    Copyright 2026 Sudip Amgain

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.