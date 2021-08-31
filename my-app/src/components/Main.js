
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';


class Main extends React.Component {

  render() {

    return (

      <div className='main' >
        {data.map((item) => {

          return (
            <div className='card' >
              <HornedBeast alt={item.keyword}
                description={item.description}
                title={item.title}
                imageUrl={item.image_url} />

            </div>

          );

        })}



      </div>
    );

  }
}

export default Main;