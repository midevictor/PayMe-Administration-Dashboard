# PayMe-Administration-Dashboard
PayMe Administration Dasboard is responsible for allowing different users around the world monitor and have acces to all transactions made through the PayMe Finance Application.

<u>DASHBOARD CREATION: THOUGHT PROCESS</u><br>
I implemented the dashboard interface through a grid view system. The dashboard interface consists  of three  components:
<ol>
<li>Aside Component</li>
<li>Main(Overview) Component</li>
<li>Right(Transaction history) Component</li>
</ol>

<u>BRIEF EXPLANATION ON EACH COMPONENT</u><br>
<u>1. ASIDE COMPONENT</u><br>
The aside component allows users have easy navigation through the PayMe dasgboard via the differnt menu items. I gave this component a specific width of 16rem on the large screens. I added an event listener to the menu-hamburger on the navigation bar that allows users to display the aside components on smaller screens just for better user experience.A close button also to close the aside components on small screens. You can go through thecodes for mre understanding<br>
<u>2. MAIN (OVERVIEW) COMPONENT</u><br>
This contains the general overview of the dashboard.From the different card details linked to the user account,to different monthly reports of the user which i used the detail tag to give more details and comparison. it also shows a bar chart comparison between the  BTC coin & ETH coin. I implemented the chart through chart.js. You can read the docs for more explanation<br>
<u>3. RIGHT (TRANSACTION) COMPONENT</u><br>
This shows all transaction history  and expenses information for each user.<br>
