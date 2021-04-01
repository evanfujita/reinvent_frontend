import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Carousel extends React.Component{

    handleSubmit = event => {
        event.preventDefault()
        const id = parseInt(event.target.id)
        const updatedQuantity = parseInt(event.target.children[0].value)
        const updatedIngredient = {
            quantity: updatedQuantity
        }
        debugger
        
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedIngredient)
        }

        fetch(`http://localhost:3000/ingredients/${id}`, reqObj)
        .then(resp => resp.json())
        .then(updatedIngredient => {
        })
    }

    render(){

        const example = this.props.ingredients.map(ingredient => {

            return (
                <div>
                <p>{ingredient.name}</p>
                <form onSubmit={this.handleSubmit}>
                <input label='quantity'/><br/>
                <input type='submit' value='update ingredient' id={ingredient.id}  />
                </form>
                </div>
                )
        })

        const settings = {
            dots: false,
            fase: true,
            infinite: true,
            speed: 0,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides'
        }
        return(
            <div>
                <Slider {...settings}>
                    {example }
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Carousel)