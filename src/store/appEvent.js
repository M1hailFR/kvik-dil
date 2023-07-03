export default {
  actions: {
    showRegPas () {
      const inputP = document.getElementById('inputPas')
      const inputP2 = document.getElementById('inputPas2')
      const iconE = document.getElementById('iconEye')
      if (inputP.type === 'password') {
        inputP.type = 'text'
        inputP2.type = 'text'
        iconE.classList.remove('ri-eye-off-line')
        iconE.classList.add('ri-eye-line')
      } else {
        inputP.type = 'password'
        inputP2.type = 'password'
        iconE.classList.remove('ri-eye-line')
        iconE.classList.add('ri-eye-off-line')
      }
    },
    showLogPas () {
      const inputP3 = document.getElementById('inputPas3')
      const iconE = document.getElementById('iconEye')
      if (inputP3.type === 'password') {
        inputP3.type = 'text'
        iconE.classList.remove('ri-eye-off-line')
        iconE.classList.add('ri-eye-line')
      } else {
        inputP3.type = 'password'
        iconE.classList.remove('ri-eye-line')
        iconE.classList.add('ri-eye-off-line')
      }
    }
  }
}
