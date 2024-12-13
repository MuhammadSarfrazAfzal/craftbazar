const mongoose = require('mongoose')
const services = require('./Model/services.js')
main()
.then(()=>{
    console.log('Connection succesfully established!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/craftbazaar');

}
let allservices = [
    {
    imgAddress:"data:image/png;base64,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",
    serviceName:'Selling Handmade wallhand',
    para:'i am selling this craft art in only 10k price!'
    },
    {
    imgAddress:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEX///8vXXXisjk7nLZRoyMWUWwkV3AsW3Thryv13ayEmqjO19xph5gtl7Ou099PdIjU3eE4ZXweVG6isr2xv8f2+PkJTWmltb/p7fDr7/FbfI+Moa6Tp7NDngB6k6Li6OtKoBTEz9VEbIKuvcbG37va6/C/3OZNpb27x8+ktL4/nQBrsErX6c90tFQAQWHhryz9+fDw05X78t+byddytcl9ucxgrMPQ5ezm8uAsmABirDur0Juhy46Zx4SRw3qHvm2/3LPR5sfv9ut6t12/27T358XrxG3muUrtzIP67tbpvln04LTnu1P679jhqgDug1jnAAAKeElEQVR4nO2ce18TOReAO0iS0g62TZmU3m8KRVdERd1d13XXfRcFVr7/x3mTTJmZZJJMWpAh88vzn9iWPM3tnJMMtZrH4/F4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6P5/HQ/3j0vOw2/CwOj96dH+9Tnpbdkp/B86fnT6jbE0b1DKOj90/WcpU0PDrfz+pVzfD5e8muYoZHHxR+FTI8eqLSq46h1q8ihh+PtX7VMDw3+ImGq958GpXX0K15b23YIACAIOw2XdM8tjaEQRAgiAFpjdrltXdz+qZOzBlyEASo0SyvyZtyZLnSpIYMCILRYXmN3gzDVNQbUjAJXRmt+qloNKQdSVpuDNbnVju+wpBOSdByoh+f6hQLDakjCctruD26qWhhGIBRee3egO37EA7Ka/UmaKaijaErIY56KhYbknl5bd4QZQheaIiH5bV4Y7bpQ9gqr72bo5qKRYa4X157t+CduRKlMHRoEsZ8yCmaDXGjvLZuR7SZIVqU19Rt+SgrGg2JM9lTBnkqmgzJqrx23oFja0M8Ka+VdyHSn1uIhqhTXiM3RphOYk1Db0imD93M7QkD4Z9CIqU1BMsHbuUdCLE0o44tDKETWW9MiOVVsa85Ic0YokD+mMfLBPAxp5uKGkPiRG2G0wWq6CSdimpD0H3gZm7PnKgjzGOlIb6dhI7ULSiHIB13QpYQJ1L7+/sfPqY/7AUE86ML5ErdolZboEyIImR6T6nd8Tv5ulB/FQKMHJqEQ5wKytn6+Xv1bahoidwoHjLaJMjiVMXFjuwY5VPRjSMIe05AIOFM5dOOCMuCLu0CNgwVlTOHdvJi+iQvWK2pOCQY5Q1Bbj2N2qvuaDTqrdr3PkmnlJ8589ujRU5SLkwcdlsEYAwhxoDdwMgnvU3YkVkMJj2bmKB9CggxVkLCIPfhCYFVfjo9ESWlTb/NApiMP8JkII/iJkB5IAZoWFgMn7CFgJheFkLFh6+xzsD7ywHAt2sOzo6ZaELinyPIiFURGYhNaua2nNtvixQEEId8IYCmV4WaI1ne1tTw10LJg5AA/n1mg+8m5B8PAR40RqPhZBG/hv5AyJa5IR3CWXD8deCOsRvXuRg2zERmiICa097tq77+9vunQsloFdJWZgsTPcKHJRwmMyqah3GnkmyixQzxqp2leTBc8FdCZFCMAKKjg77ZsEFRQ9SattUkn/1svDt78fsfvxRJ1uaTTHu6XFDeHg8nhPUOyAQGzBDk15VpyD4AGqr+XUzTbtaPqMCwsOF/zHYpsxe7n4slE1asfbiVL9o3AyhWdTSG9CPY8AUn2l/Bum/JNmVwoH2NneGr3TWz8ezPvwtfzpmyrsLqaloISLZJWsO4fAB1v2JJY0YcO+gry3aGs92U2Xj85VnhO2q1DjKUCydCv+gN+W4AdOeL9FfgUZzAaV9jZ/h1vCswG7/456+v5vfQKWJ9cGYwnBL9ZsDGMN8KW8ggYWX4i2QY9+QrkyRPOmxr9gZD1k9Ik61QMcjDmTkwlCatDJ/lDeOe1O8hrAuxbaXCZDhAuqHQJMl3SL8G7YSwMvw0UxnGy6tGkm8IthFxkaG6gQOY5KJLoB8wVoaftYbxHpLfKFmbofX5vMlwoRulbIYmeRpdj6Am/rYy/GIyjCU/i3vICOrbnMdgGGm/qkm25SM6KYA6+LEyfFVguJvbKFvIsI3lMBj2WNNVB+F9kP0P9kVopr2V4ctCwbgnPyXvgBsdnekN+ZKsnM9DcZtnoRtQfvg9Gu6Ok0CAJTXQvuarN2RjQdk3vNMy2R2blbineOH9GibDtA10v0+JznDagbqj/m4csIkiyvPIxDBaHggsM4Pf1jBZUnk6pA+G7QzbPAlBQLkL5Pq2DTQTNjGcnmIBkPnqHs5wddLjnAxprhmnh0pBugEiaXq2NKFBaihVErKvfrhROgDrL3hdHCATddTQQbn9j0Wpqvg7NSRQAG9hmKw07OvaaqXJFlUgABNNnDJXxTCBOjZIDPuThkgmoLc0THcLtshvtVus+5AbjubaqK+likNZtqiIv+12/GI7mmu8/JTmGostd/xll8N6EutvnbbVuYQ6IbUy/KcoahuPpXyRbcD2p7y5tZSn9kB7aTFt9Pob4fRokK646Whl+Kcx8mY5/5n0DjZRjFVMgfxu0TDlz2x3jzeGPsku/yyfycewd82exrMvyroNr0JZyHEU+2EL6u8tTpLNXXH0lQvxrAz/p8yAaSA609beGgVVTAGFYZ9X2ZRbaj8J0CIi7uFYFeNtW8VQp4UpbCQhTT6TQxXT8KmozGpZx8XDo90V6alSmq0qUfrUPoUVyWyfo1BGbSOgvvkWGeojcykeZ2xTTXzxsrjEz4N//Q3gVZCdLuq4dKBOwU70yW5ct5K+FTvDlxk9Y4ktAy95A3Ulo0tgJ6OoNozYMpI/Mkf6gkWtdpCPv+0M40JNftsz0uCLRZgPTKIB20tg2g+a7KnJp6L085Wh6FTj/tIuY2f419iy1D0dZYTYpVOaHMgpzZIfNZLMVNLlh+zOo3z/jUZLptseLG8EwgmsneGvv40tjivaow4QhmUYXztdHKSN7HcDwA9Js+uBNsfnU1HwYWsJMNyEYNNfjL/tDGvFes0GIuxQU7iIMeIHaQiT1nC5Wq16jfWBOESCj9YwouuG+PysLgtM4PFidhRbGhayPviUF/h2B/CjXMSuKeD1uS6Ssz59nYbfmst8aW2SW0kk+EFHdiW6L8NpcrNGWuB7ARBDK0gGsoyhmshvlaV3OrXVmBSWYmbj7/syTO/+5q7TrEJ2Kg8RguzvfQRDxW2TU0JONZMrJJTbisqUvVB/YMpp09dk758M6D/v5eGxKHNDPbeHNZfDcDAIG6OVep2PKNoPjtL/jUwvFN6g/ecdWCXj1NGHtYqZrHvRvScmrekguUhXNeL1VF98qAAsp6vsJIw5IK4+MWlNT9yO37yRS1Rr5i2HnssTEXaef+uv6xfXOcnmkMY5Lj1bqeWsvkOp1799v0x/uBoAHsY59XysjqudNfW99IdJdFeBGfumrjSElQl9LhNBjaHrO+fZ650iQ8ejn6tiQ7cj2L10jOoN3fu7LSk/bnZsDPWl3UfPzo6doVt/PynDxWtLQ1efyBQmodnQzcfA3kqCRkPj0yCPlR0Zo6GDT2RKk7DIUDjBcIJreYyaDSGZOBa85SahyRBhorv29Hj5lhfUGUIQdN1bZr7nJqHaELFbay5uFP8qxqhsyJ4OBYuhi3q3dQuj4YS0Ju79yfmE/5SCgqGzbpw36i4UDJ1GPQkrZKiZhBUyvFJtFFUy1E3Cyhhe6gWrYXimHaJVMcynTBUzlOsWlTP8YRSsgqHRrwqGxklYBUPzJKyA4dubAkHnDYv8nDdU1i2qZPjjpuqGtbOLooXGdUMadP9X4Oi8Ic3ud6oetdVq19+qnj3Rfryq69acihjSrf97vbhe6jhn11c3BScz7nO2d1WXh2u1DGusJy/qgmXlDBlv9y52Es1KGjLOLve+XzHPm6oarnl7ef2j7DZ4PB6Px+PxeDwej8fj8Xg8Ho/H4/F4PB6Px+PxeB6G/wPEoeFcEHGc1gAAAABJRU5ErkJggg==",
    serviceName:'Selling Handmade wallclock',
    para:'i am selling this craft art in only 10k price!'
    }
]
services.insertMany(allservices)