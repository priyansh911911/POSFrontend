import Button from '../ui/Button';

const Referrals = () => {
  const referrals = [
    { id: 1, referrer: 'John Doe', referred: 'Jane Smith', reward: '₹100', status: 'Completed', date: '2024-01-15' },
    { id: 2, referrer: 'Mike Johnson', referred: 'Sarah Wilson', reward: '₹100', status: 'Pending', date: '2024-01-14' },
    { id: 3, referrer: 'Emma Davis', referred: 'David Brown', reward: '₹100', status: 'Completed', date: '2024-01-13' }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Referral Program</h2>
        <Button>Program Settings</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Total Referrals</h3>
          <p className="text-2xl font-bold text-text">89</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Successful</h3>
          <p className="text-2xl font-bold text-green-500">67</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Rewards Paid</h3>
          <p className="text-2xl font-bold text-text">₹6,700</p>
        </div>
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-text-muted text-sm">Success Rate</h3>
          <p className="text-2xl font-bold text-text">75.3%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Program Details</h3>
          <div className="space-y-4">
            <div className="p-4 bg-background rounded">
              <h4 className="text-text font-medium mb-2">Referrer Reward</h4>
              <p className="text-2xl font-bold text-primary">₹100</p>
              <p className="text-text-muted text-sm">Per successful referral</p>
            </div>
            <div className="p-4 bg-background rounded">
              <h4 className="text-text font-medium mb-2">Referee Discount</h4>
              <p className="text-2xl font-bold text-primary">20%</p>
              <p className="text-text-muted text-sm">On first order</p>
            </div>
            <Button className="w-full">Share Referral Link</Button>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Recent Referrals</h3>
          <div className="space-y-3">
            {referrals.map(referral => (
              <div key={referral.id} className="p-3 bg-background rounded">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-text font-medium">{referral.referrer}</p>
                    <p className="text-text-muted text-sm">referred {referral.referred}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    referral.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {referral.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{referral.reward}</span>
                  <span className="text-text-muted text-sm">{referral.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;