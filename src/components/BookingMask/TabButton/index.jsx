import React from 'react'

export default function TabButton ({ name, onClick, activeTab, icon }) {
  return (
    <button
      className={activeTab === name ? 'active' : ''}
      onClick={() => onClick(name)}
      key={name}
    >
      {icon}<span>{name}</span>
    </button>
  )
}