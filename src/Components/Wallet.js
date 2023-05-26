import "./Wallet.css"
import { FcLandscape } from "react-icons/fc";
import { MdOutlineDashboard, MdOutlineShoppingCart, MdImportantDevices, MdWallet, MdChatBubbleOutline, MdOutlineSettings, MdOutlineHelpOutline, MdOutlineNotificationsNone, MdSearch } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Mine from "../Images/DSC_0087.jpg"

let Wallet = ()=>{
    return(
        <div className="container">
            
            <div className="side"><br/>
                <header><FcLandscape /> LandTech-Devs</header><br/> <br/>
               <div className="side-container">
                <div className="list"><ul>
                <li><MdOutlineDashboard id="list1"/> Dashboard</li><br/><br/>
                <li><MdOutlineShoppingCart id="list1"/> Orders</li><br/><br/>
                <li><MdImportantDevices id="list1"/> Products</li><br/><br/>
                <li><MdWallet id="list1"/> Wallet</li><br/><br/>
                <li><MdChatBubbleOutline id="list1"/> Chats</li> <br/><br/>   
                    </ul> </div><br/><br/>
                    <div className="side-down">
                        <ul id="down">
                            <li><MdOutlineSettings id="list2"/>Settings</li><br/>
                            <li><MdOutlineHelpOutline id="list2"/>Help center</li>
                        </ul>
                    </div>
                    </div>
            </div>
            <div className="content">
            <div className="top">
                <ul id="icons">
                    <li id="icon"><MdSearch id="iconia"/></li>
                    <li id="icon"><MdOutlineNotificationsNone id="iconia" /></li>
                    <li id="icon"><RxDividerVertical id="iconia" /></li>
                    <li id="icon"><img src={Mine}id="iconia"></img></li>
                    <li id="icon"><h1>Ishimwe Axcel</h1>
                        <p1>aishimwe811@gmail.com</p1>
                    </li>
                </ul>
            </div>
            <div className="middle">

                <div className="visa">
                    <p>Account Balance</p>
                    <p>$122,471</p>


                    <p>Account Number</p>
                    <p>1 900 8988 1234</p>
                </div><br/> <br/><br/>
                <div className="table">
                <h2>Income Transition</h2>
  <table class="income-table">
    <tr class="header-row">
      <th>Transaction Id</th>
      <th>Customer Name</th>
      <th>Email Address</th>
      <th>Product</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
    <tr>
      <td class="transaction-id">1</td>
      <td class="customer-name">Axcel Ishimwe</td>
      <td class="email-address">aishimwe811@gmail.com</td>
      <td class="product">Product A</td>
      <td class="amount">$100.00</td>
      <td class="date">2023-05-01</td>
    </tr>
    <tr>
      <td class="transaction-id">2</td>
      <td class="customer-name">Richard Ishimwe</td>
      <td class="email-address">richIshimwe@gmail.com</td>
      <td class="product">Product B</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">3</td>
      <td class="customer-name">Pacifique Iradukunda</td>
      <td class="email-address">paccy@gmail.com</td>
      <td class="product">Product container</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">4</td>
      <td class="customer-name">Edith</td>
      <td class="email-address">Edith@gmail.com</td>
      <td class="product">Product d</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">5</td>
      <td class="customer-name">Kanyana Victoire</td>
      <td class="email-address">Kanyana@gmail.com</td>
      <td class="product">Product B</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">6</td>
      <td class="customer-name">Grace Munezero</td>
      <td class="email-address">grace@gmail.com</td>
      <td class="product">Product B</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">7</td>
      <td class="customer-name">Prosper</td>
      <td class="email-address">prosper@gmail.com</td>
      <td class="product">Product f</td>
      <td class="amount">$50.00</td>
      <td class="date">2023-05-02</td>
    </tr>
    <tr>
      <td class="transaction-id">8</td>
      <td class="customer-name">Hubert</td>
      <td class="email-address">Hubert@gmail.com</td>
      <td class="product">Product z</td>
      <td class="amount">$75.00</td>
      <td class="date">2023-05-08</td>
    </tr>
  </table>
                </div>
            </div>
            </div>


        </div>
    );
}
export default Wallet;