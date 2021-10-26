import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';

function DataInput({input, setInput, todo, setTodo}) {
    console.log('DATA INPUT');
    const handleSubmit = (e) => {
        e.preventDefault();

        setTodo([...todo, {inputText: input, id: parseInt(Math.random() * 100) , isCompleted: false}]);

        setInput('');

    }

    return (
        <div>
            <form className="data-form" onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                    <button type="submit" className="submit-button"><FontAwesomeIcon className="submit-icon" icon={faClipboard} /></button>
                </label>
            </form>
        </div>
    )
}

export default DataInput

/**
 * 1) Madem butonu ile birlikte bir input componenti yaptın, o zaman inputun state ini duşarıdan almana gerek yok. 
 *    Çünkü componentin amacı butona tıklandığında inputun içindeki değeri bildirmek.
 * 
 * 2) Componentlerin ne zaman, nerede, neden kullanılacağını bilemezsin.
 *    Bu yüzden todo listesini dışarıdan almamalısın. Bu componentin todo listesi ile bir işi yok.
 * 
 * 3) Buradaki componenti bir form elementine dönüştürmemelisin. 
 *    Eğer bu bu componenti ileride alıp bir formun içinde kullanmaya çalışırsan hata alırsın.
 *    Bunun yerine butonun onClick eventini dinlemelisin.
 * 
 * 4) parseInt(Math.random() * 100) işlemini dışarıda util diye bir js dosyasına yaşımalısın ki ileride tekrar tekrar kullanabil.
 * 
 * Bu componentin sadece butona tıklandığında inputun içindeki stringi dışarı gönderecek örneğin "onSet" diye bir propertysi olması lazım.
 * 
 * 
 */