import AnimatedCounter from './AnimatedCounter'
import DougnutChart from './DougnutChart'

const TotalBalanceBox = ({accounts= [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DougnutChart accounts= {accounts}/>
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
            Bank Accounts: {totalBanks}  
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance: 
                </p>

                <span className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance} />
                 </span>
            </div>
        </div>
        </section>
  )
}

export default TotalBalanceBox