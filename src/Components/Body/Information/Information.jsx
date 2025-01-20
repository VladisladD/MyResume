import './Information.css';
import Myphoto from './Image/Myphoto.jpg';
function Information()   {
    return (
        <div className="card">
            <img src={Myphoto} alt='' className="card-image" />
            <div className="card-info">
                <h2 className="card-title">Информация:</h2>
                <p className="card-description">
                    <ul>
                        <li>ФИО:Кюрджиев Владислав Николаевич</li>
                        <li>Возраст:27 лет</li>
                        <li>Дата рождения:21.12.1997</li>
                        <li>Гражданство:РФ</li>
                        <li>Личный номер:89899719008</li>
                    </ul>
                </p>
                <h2 className="card-title">Желаемая должность:</h2>
                <p className="card-description">
                <p>Frontend-разработчик</p>
                    <ul>
                        <li>Полная занятость</li>
                        <li>Офис,удаленная работа</li>                       
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Information;