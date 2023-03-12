import { useNavigate } from "react-router-dom";

export function FormproductA() {
    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email:data.get("email"), password:data.get("password"), surname:data.get("surname"), name:data.get("name") })
        };
        fetch('http://localhost:3001/api/user/register', requestOptions)
          .then(response => response.json())
          .then(dataBack => {
            setTimeout(() => {
              navigate('/connect');
            },1000)
          })
          .catch(error => {
            console.error(error);
          });
    }
    return (
        <>
        <form>
            <label>Enter your name:
                <input type="text" id="name" name="name"/>
            </label>
            <input type="submit" onSubmit={submitForm} />
        </form>
        </>
    )

}