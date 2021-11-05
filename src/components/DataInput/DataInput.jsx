import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';
import './DataInput.css';

function DataInput({onSet}) {
    console.log('DataInput');
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        onSet(input);

        setInput('');
    }

    return (
        <div>
            <label>
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                <button type="submit" className="submit-button" onClick={handleSubmit}><FontAwesomeIcon className="submit-icon" icon={faClipboard} /></button>
            </label>
        </div>
    )
}

export default DataInput

/**
 * 1) (Done!!!) Madem butonu ile birlikte bir input componenti yaptın, o zaman inputun state ini duşarıdan almana gerek yok. 
 *    Çünkü componentin amacı butona tıklandığında inputun içindeki değeri bildirmek.
 * 
 * 2) (Done!!!) Componentlerin ne zaman, nerede, neden kullanılacağını bilemezsin.
 *    Bu yüzden todo listesini dışarıdan almamalısın. Bu componentin todo listesi ile bir işi yok.
 * 
 * 3) (Done!!!) Buradaki componenti bir form elementine dönüştürmemelisin. 
 *    Eğer bu bu componenti ileride alıp bir formun içinde kullanmaya çalışırsan hata alırsın.
 *    Bunun yerine butonun onClick eventini dinlemelisin.
 * 
 * 4) (Done!!!) parseInt(Math.random() * 100) işlemini dışarıda util diye bir js dosyasına yaşımalısın ki ileride tekrar tekrar kullanabil.
 * 
 * (Done!!!) Bu componentin sadece butona tıklandığında inputun içindeki stringi dışarı gönderecek örneğin "onSet" diye bir propertysi olması lazım.
 * 
 * 
 */