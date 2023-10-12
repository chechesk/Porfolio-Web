import React, { Component } from 'react'
import Food from '../../assets/Pi-Food.png'
import Cyberzon3 from '../../assets/Pf-Cyberzon3.png'
import './Card.css'




export default class Card extends Component {
  render() {
    return (
      <section class="articles">
      <article>
        <div class="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/1011/800/450" alt="" />
          </figure>
          <div class="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
            </p>
            <a href="#" class="read-more">
              Read more <span class="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
      <article>
    
        <div class="article-wrapper">
          <figure>
            <img src={Food} alt="" />
          </figure>
          <div class="article-body">
            <h2>Project Individuality Food</h2>
            <p>
            apply the technologies learned in the bootcamps with nodejs, express, react, redux, sequelize, css.
            </p>
            <a href="#" class="read-more">
              Read more <span class="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
      <article>
    
        <div class="article-wrapper">
          <figure>
            <img src={Cyberzon3} alt="" />
          </figure>
          <div class="article-body">
            <h2>Cyberzon3</h2>
            <p>
            travel e-commerce integration project.
            </p>
            <a href="#" class="read-more">
              Read more <span class="sr-only">about this is some title</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>

      

      
    </section>
    )
  }
}
