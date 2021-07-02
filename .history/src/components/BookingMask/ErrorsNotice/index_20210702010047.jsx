export default function ErrorsNotice ({ errors }) {
  return (
    <div className="bookingmask__errors" >
      <h4>
        An error has ocurred: Please resolve the following issue{errors.length > 1 && 's'} before you continue:
      </h4>
      <h4>
        Please fill out the following field{errors.length > 1 && 's'}{errors.map(err => ` ${err}`)}
      </h4>
    </div>
  )
}