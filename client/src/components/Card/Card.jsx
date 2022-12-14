import React from 'react'
import s from './Card.module.scss'
import { Link } from 'react-router-dom'
import { TfiAlarmClock } from 'react-icons/tfi'
import { motion } from 'framer-motion'

const Card = ({ id, name, image, summary }) => {

  return (
    <Link to={`/recipe/${id}`} className={s.card}>
      <div className={s.cardImage}>
        <img src={image} alt={name} />
      </div>
      <h6>{name}</h6>
      <p dangerouslySetInnerHTML={{ __html: summary }} className={s.summary}></p>
    </Link>
  )
}

export default Card