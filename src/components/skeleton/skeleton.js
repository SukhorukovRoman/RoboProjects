import './skeleton.scss';

const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className='skeleton__tabs'>
                <div className='skeleton__tabs-tab'/>
                <div className='skeleton__tabs-tab'/>
                <div className='skeleton__tabs-tab'/>
            </div>
            <div className='skeleton__wrapper'>
                <div className='skeleton__item'/>
                <div className='skeleton__item'/>
                <div className='skeleton__item'/>
                <div className='skeleton__item'/>
                <div className='skeleton__item'/>
                <div className='skeleton__item'/>
            </div>
        </div>
    )
}

export default Skeleton;