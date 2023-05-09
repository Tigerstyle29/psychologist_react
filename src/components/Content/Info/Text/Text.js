import './text.css'

const Text = () => {
    return (
        <div className='information'>
            <h1 className='information-h1'>
                Психолог онлайн
            </h1>
            <h2 className='information-h2'>
                Игорь Антипов
            </h2>
            <p className='information-p'>
                Помогу решить проблемы и начать новую жизнь
            </p>
            <button class="info-button">
                Записаться
            </button>
            <p className='information-p2'>
                Первая консультация - бесплатно
            </p>
        </div>
    )
}

export default Text