import React from 'react'

const Hero = ( { heroName } ) => {
    if ( heroName === 'Joker' ) {
        throw new Error( 'Not a Hero, he is Super Villian' );
    }
    return (
        <div>{ heroName }</div>
    )
}

export default Hero