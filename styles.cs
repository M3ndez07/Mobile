body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.container {
  text-align: center;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #fff;
  width: 500px;
}

.choice {
  margin: 10px;
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
}

.choice:hover {
  background-color: #f0f0f0;
}

#next {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

#score,
#wrong {
  font-size: 1.2em;
  color: #007bff;
  margin-top: 20px;
}