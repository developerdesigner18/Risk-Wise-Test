import React, { useEffect } from 'react';
import { applyStyles } from './components/scripts/styleScript';
import LoginForm from './components/login/LoginForm';
import LeftTextBlock from './components/login/LeftTextBlock';

const App = () => {
 
  useEffect(() => {
    // Run the function once when the component mounts
    applyStyles();
    // Optional: Re-run if classes might change dynamically
    const observer = new MutationObserver(() => applyStyles());
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
    // Cleanup observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  
  return (
    <main className="main-full">
    <section className="sec-user-block">
      <div className="row row-gap-0">
        <div className="col-32">
          <div className="user-block-banner">
            <img src="/images/bg1.jpg" alt=""/>
            <div className="row row-gap-0">
              <div className="col-30">
                <LeftTextBlock/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-16">
          <LoginForm/>
        </div>
      </div>
    </section>
  </main>
  );
}

export default App;

