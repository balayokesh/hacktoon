import React, { useState} from 'react';


const App = () => {


    return (
        <>

      <header className="header">
        {/* To be filled later */}
        <h3 className="logo">Mickey-Hacktoon</h3>
        <div className="participants">
            <h2>Monesh Goyal</h2>
            <h2>Bala Yokesh</h2>
            <h2>Cheng Yang</h2>
        </div>
      </header>

      <main className="main_div">
        <h1>Rule:</h1>
        <h1>The objective is to collect the most pairs of cards.</h1>
        <h1>When the game starts, all the cards are turned face down.</h1>
        <h1>The player then flips over two cards, if they matches, then they gain the points, if not the game is over.</h1>
       
      </main>

      <footer className="footer">
        {/* To be filled later */}
      </footer>

        </>
    )
}

export default App;
