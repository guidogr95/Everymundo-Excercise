import './errorsnotice.scss'

export default function ErrorsNotice ({ errors }) {
  return (
    <div className="bookingmask__errors" >
      <h3>
        An error has ocurred: Please resolve the following issue{errors.length > 1 && 's'} before you continue:
      </h3>
      <h3>
        Please fill out the following field{errors.length > 1 && 's'}{errors.map(err => `, ${err}`)}
      </h3>
    </div>
  )
}