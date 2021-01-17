
# Everlance Code Challenge

## Everlance Weather App
Comments regarding the development.

* **Internationalization**: The app has the ability to change its language flawlessly. The app has English, Spanish and German. I added German by one comment Alex Marlantes said that there were some German people using the Track Expenses feature. So, I added their language to not make them left out.

* **Responsive**: The app is fully responsive.

 * **Reusable components**: There are several components that are reusable based on the design in the componentization analysis. Every other component is ready to be shared and be reusable.

 * **Improved Desing**: The design screens given were taken as an inspiration, the designs and other components and behavior were added to improve the app and the overall UX. Also, I changed the primary color of the designs and used the color of Everlance.


### Added Features 
When we load the Weather app, we request the user localization in order to get the information for the nearest location of the user. 

Everything has proper validation for errors, and the app has the ability to tell the user that someting went wrong.


### Problems in Development 
The only problem I had during the development were the Cross Origin validation in the MetaWeather API. I tried several thins, and they were not successful.

To solve this problem I suggest donwloading the following [Chrome Extension](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino), and turn it on for the city search to start working. The other API request will fail.

To see that the whole app is working I added local mocked data directly from the API, we can toggle this feature in the drawer menu. Once we checked the option the app will reload and will show the information as it would come from the API. This functionality was to show the, "Your location" component, city list and modal working with the information.

## Development server
Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## Online Web App
If you're not able to run the development server you can access the deployed application [Here](https://everlance-weather.vercel.app/).

## References
In the footer of the app there's a link to a document where I started with the analysis of the layout and componetization. Every component in the mockup exists in the app.

[Document](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/fileexport/Export_D833a47bec7f6cf2a15045de54f790dfa.pdf).


## Development practices
In this project you will find a segregation of components, to avoid mixing logic from different contexts.

Regarding the logic for the application and the problem solutions, there are several techniques implemented, such as: 

* **Object literals**
* **Destructuring assignment** 
* **BEM** 
* **Avoiding magic numbers/strings**
* **Open/Closed SOLID principle** 
* **Separation of concerns** 
*  **Interface segregation principle**
*  **Many more...**


Author: **Miguel Hernandez** 

[LinkedIn](https://www.linkedin.com/in/miguelhernandezch/) - [Portfolio](https://miguelhernandezch.github.io/me)

January 17th, 2021.
 
 _Monterrey, Nuevo León, México._