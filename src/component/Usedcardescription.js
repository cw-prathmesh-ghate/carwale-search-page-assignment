import React from "react";

export default function (props) {
  const [isvisible, setisvisible] = React.useState(false);

  const style = { display: isvisible ? "block" : "none" };

  return (
    <div className="usedcar-content">
      <div className="usedcar-title">
        <h1>{props.searchCount} Used Cars in India</h1>
      </div>
      <div className="usedcar-desc">
        <p className="usedcar-desc-visible">
          With {props.searchCount} used cars in India from various models such as Swift, Wagon
          R, City, Baleno, Swift DZire, Elite i20, Creta etc. ranging from Rs.
          N/A to Rs. 8 Crore, CarWale offers you a great choice and value for
          your money on your used car purchase. The popular cities to buy a
          second hand car are
        </p>
        <div className="usedcar-toggledesc" style={style}>
          <p>
            Mumbai, Bangalore, Delhi, Pune, Navi Mumbai. There are a total of 47
            used car brands available like Maruti Suzuki, Hyundai, Mahindra,
            Honda, Tata, Toyota, Ford etc.
          </p>
          <table className="usedcar-toggleatable">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>

        <div className="readmore-btn">
          <input
            className="usedcar-desctogglebtn"
            type="button"
            value={isvisible ? "Collapse" : "Read More"}
            onClick={() => {
              setisvisible(!isvisible);
            }}
          />
        </div>
        <hr />
      </div>
    </div>
  );
}
