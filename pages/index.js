import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography';
import 'animate.css/animate.css';
import github_gif from '../assets/to-github.gif';
import lichess_gif from '../assets/to-lichess.gif';

export default function Home() {
  
  
  const [isLeaving,setIsLeaving] = useState(false);
  
  useEffect(function mount() {
    function onBeforeUnload() {
      setIsLeaving(true);
      console.log("unload!");
    }

    window.addEventListener("beforeunload", onBeforeUnload);

    return function unMount() {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  });

  if (isLeaving) {

    return(
      <div className={styles.container}>

        <Head>
          <title>Netflix BeforeUnload</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

          <Typography variant="h1" component="h2" className="animate__animated animate__bounceOut animate__slow">
            beforeunload
          </Typography>
        </main>
      
      </div>
    )
  } else {
    
    return (
      <div className={styles.container}>
        
        <Head>
          <title>Netflix BeforeUnload</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h8 className={styles.title}>
            Exit animation with&nbsp;
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload" target="_blank">onbeforeunload</a>
          </h8>

          <p className={styles.description}>
            How does Netflix do it?&nbsp;
            <a href="https://github.com/alicanyildirim/netflix-exit-animation" target="_blank">
              <code className={styles.code}>on github</code>
            </a>
          </p>
          
          <div className={styles.grid}>

              <div style={{display: "flex", flexDirection: "row"}}>
                <img src={github_gif} alt="To Github Gif" className={styles.card}/>
                <img src={lichess_gif} alt="To Lichess Gif" className={styles.card}/>

              </div>


                

              <p className={styles.description}>
                After you click on another website from the address bar, you should observe the exit animation. 
              </p>
              <p className={styles.description}>
                The duration of this animation varies. 
              </p>
              <p className={styles.description}>
                If the website to be visited has the fast largest contentful paint, 
                the websites' transition will be too fast for the animation to be completed.               
              </p>
              <p className={styles.description}>
                You can test the behavior of the animation with different websites.
              </p>


          </div>

        </main>
      </div>
    )

  }
  
}
