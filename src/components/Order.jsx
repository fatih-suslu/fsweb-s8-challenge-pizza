import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./Order.css";
import { useHistory } from "react-router-dom";

export default function Order() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const history = useHistory();

  const toppings = [
    { name: "pepperoni", label: "Pepperoni" },
    { name: "tomato", label: "Domates" },
    { name: "pepper", label: "Biber" },
    { name: "sausage", label: "Sosis" },
    { name: "corn", label: "Mısır" },
    { name: "sujuk", label: "Sucuk" },
    { name: "canadianBacon", label: "Kanada Jambonu" },
    { name: "salami", label: "Salam" },
    { name: "pineapple", label: "Ananas" },
    { name: "grilledChicken", label: "Tavuk Izgara" },
    { name: "jalepeno", label: "Jalepeno" },
    { name: "zucchini", label: "Kabak" },
    { name: "onion", label: "Soğan" },
    { name: "garlic", label: "Sarımsak" },
  ];

  const handleToppingChange = (event) => {
    const { checked, name } = event.target;
    if (checked) {
      if (selectedToppings.length < 10) {
        setSelectedToppings([...selectedToppings, name]);
      }
    } else {
      setSelectedToppings(selectedToppings.filter((topping) => topping !== name));
    }
  };

  const handleQuantityChange = (event) => {
    setPizzaQuantity(Number(event.target.value));
  };

  const incrementQuantity = () => {
    setPizzaQuantity(pizzaQuantity + 1);
  };

  const decrementQuantity = () => {
    if (pizzaQuantity > 1) {
      setPizzaQuantity(pizzaQuantity - 1);
    }
  };

  const basePrice = 85.50;
  const toppingPrice = 5;
  const totalPrice = (basePrice + selectedToppings.length * toppingPrice) * pizzaQuantity;

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/success");
  };

  return (
    <div className="order-container">
      <section className="order-header">
      <h1 className="title">Teknolojik Yemekler</h1>
      <h2 className="subtitle">Anasayfa - Seçenekler -Sipariş Oluştur</h2>
      </section>

      <div className="order-info">
        <h3 className="pizza-name">Position Absolute Acı Pizza</h3>
        <section className="pizza-info">
          <div className="pizza-details">
            <h2 className="pizza-price">{basePrice}₺</h2>
            <div className="pizza-rating-reviews">
              <h4 className="pizza-rating">4.9</h4>
              <h4 className="pizza-reviews">(200)</h4>
            </div>
          </div>
          <p className="pizza-description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </section>
      </div>
      <Form onSubmit={handleSubmit}>
        <div className="pizza-dough">
          <FormGroup className="size-formGroup">
            <Label for="size">Boyut Seç</Label>
            <Label><Input type="radio" name="size" value="small" /> Küçük</Label>
            <Label><Input type="radio" name="size" value="medium" /> Orta</Label>
            <Label><Input type="radio" name="size" value="large" /> Büyük</Label>
          </FormGroup>
          <FormGroup className="dough-formGroup">
            <Label for="dough">Hamur Seç</Label>
            <Input type="select" name="dough">
              <option value="thin">İnce</option>
              <option value="thick">Kalın</option>
            </Input>
          </FormGroup>
        </div>
        <div className="pizza-toppings">
          <FormGroup>
            <Label for="toppings">Ek Malzemeler</Label>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="toppings-checkboxs">
            {toppings.map((topping) => (
              <Label key={topping.name}>
                <Input
                  type="checkbox"
                  name={topping.name}
                  onChange={handleToppingChange}
                  disabled={!selectedToppings.includes(topping.name) && selectedToppings.length >= 10}
                />
                {topping.label}
              </Label>
            ))}
            </div>
          </FormGroup>
        </div>
        <div className="user-note">
          <FormGroup>
            <Label for="order-note">Sipariş Notu</Label>
            <Input type="textarea" name="order-note" placeholder="Siparişine eklemek istediğin bir not var mı?" />
            <hr></hr>
          </FormGroup>
        </div>
        <div className="order-summary">
          <FormGroup>
            <Label for="quantity">Pizza Miktarı:</Label>
            <div className="quantity-control">
              <Button className="quantity-button" type="button" color="warning" onClick={decrementQuantity}>-</Button>
              <Input
                type="number"
                name="quantity"
                value={pizzaQuantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <Button className="quantity-button" type="button" color="warning" onClick={incrementQuantity}>+</Button>
            </div>
          </FormGroup>
          <FormGroup className="orderprice-formGroup">
          <div className="orderprice-summary">
            <div className="orderprice-title">
              <h5>Sipariş Toplamı</h5>
            </div>
            <div className="orderprice-details">
              <div>
                <p>Seçimler:</p>
                <p>Toplam:</p>
              </div>
              <div>
                <p>{(selectedToppings.length * 5).toFixed(2)}₺</p>
                <p>{totalPrice.toFixed(2)}₺</p>
              </div>
            </div>
          </div>
          <Button type="submit" color="warning">SİPARİŞ VER</Button>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}