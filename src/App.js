
import "./App.css";
import  Card  from './compount/card';
import NAVBAR from './nav bar/index';



function app() {
  return(
<div>
  <header>



<NAVBAR/>
<div className="conatiner">

<Card/>
<br />
<Card/>
<br />

<Card/>
<br />
<Card/>

</div>
  </header>
</div>

  );
}

export default app;