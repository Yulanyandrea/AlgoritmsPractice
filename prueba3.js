// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

  function solution(A) {
    // Step 1
    const positiveSet = new Set();
    for (let elem of A) {
      if (elem > 0) {
        positiveSet.add(elem);
      }
    }

    // Step 2
    let smallestMissing = 1;
    while (positiveSet.has(smallestMissing)) {
      smallestMissing++;
    }

    // Step 3
    return smallestMissing;
  }

  // In the context of the solution to the problem you provided,
  // we use new Set() to create a Set object that will store the positive integers present in
  // the input array A. We can then use the Set.add() method to add positive integers to the Set,
  // and the Set.has() method to check if a particular positive integer is present in the Set.

const A = [1, 2, 3]
console.log(solution(A))

////////////////////////////////////////////////////////////////////////////////
const callMock = require("./callMock");
const axios = require("axios");
const { BASE_URL } = require("./baseUrl");

function cityWeather(city) {
  if (typeof city !== "string") {
    throw new Error("not a string");
  }
  if (!city.trim()) {
    throw new Error("string is empty");
  }

  const url = `${BASE_URL}&q=${city}`;

  return axios.get(url, { adapter: callMock })
    .then(response => {
      const data = response.data;
      const weatherData = {
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
      return weatherData;
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        throw new Error("city not found");
      } else {
        throw error;
      }
    });
}

module.exports = { cityWeather };


///////////////////////////////////////7
// Create a simple longin form in Vue. create an input element for the username field .
// It shpuld have its set to username-input and type attribute set to text .
// The usernam input should update its value attribute on being changed with the entered username.
// create an input element for the password field. It should have its id set to password-input and type
// attribute set to password. The password input should update its value attribute on being changed with
// the entered password.  Create a submit button with its id seet to login-button.
// The submit button should be disable (disable attribute set to true ) until both username and password
// fields are filled . The submit event should be emitted when the submit button is clicked.
// The submit event should be emitted with username and password passed as parameters
//LoginForm should pass username and password with submit event

{/* <template>
  <div>
    <label for="username-input">Username:</label>
    <input type="text" id="username-input" v-model="username" @input="updateForm">
    <br>
    <label for="password-input">Password:</label>
    <input type="password" id="password-input" v-model="password" @input="updateForm">
    <br>
    <button id="login-button" @click="submitForm" :disabled="!username || !password">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    updateForm() {
      this.$emit('update', this.username, this.password);
    },
    submitForm() {
      this.$emit('submit', this.username, this.password);
    }
  }
}
</script> */}
