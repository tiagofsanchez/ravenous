const clientId = 'dPyy-BZItA6teybO5jshbg';
const apiKey = 's2437ycRaXyXvGAbZLPP_TVRw8ky4e2NcIAShrKxVy_KTUBdZpH7itBUhRVpYj3ExHkfpcmbylhlY4xeFsmTHEbGrVOdEqGLxo8yFngvywp9FEHy0pInZa6gcYMlXHYx';


//Cors? What is this?
//headers? what is this on fetch?
//review maps 
const Yelp = {

    searchYelp (term, location, sortBy) {
        const options =  {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, options)
      .then(response => {return response.json()})
      .then(jsonResponse =>{
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(jsonResponse)
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.reviewCount,
                    }
                } )
            } 
        });      
    }
};

export default Yelp;
