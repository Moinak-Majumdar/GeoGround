import {motion} from 'framer-motion'

const divVariants = {
    initial: {
        opacity: 0
    },
    animate: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.45, delayChildren: 0.3 * i, }
    })

}
const spanVariants = {
    initial: {
        opacity: 0,
        y: -20,
        x: -20,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100
        }
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            repeat: Infinity,
            duration: 2,
            type: 'spring',
            damping: 12,
            stiffness: 100
        }
    }
}

const ImgSideLoader = () => {
    const text = "loading . . ."
    const word = text.split(' ')
    return (
        <motion.ul variants={divVariants} initial='initial' animate='animate' className='overflow-hidden flex'>
            <span className='txt2 text-2xl font-bold text-gray-800'>Information is</span>
            {word.map((word, i) => {
                return (
                    <motion.li variants={spanVariants} key={i}>
                        <span className='ml-2 txt2 text-2xl font-bold text-gray-800'>{word}</span>
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

export default ImgSideLoader