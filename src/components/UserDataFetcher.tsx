import React from 'react';

const UserDataComponent = ({ apiUrl }) => {
  const [displayName, setDisplayName] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        const userDisplayName = userData.result.user.displayName;
        setDisplayName(userDisplayName);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [apiUrl]); // Dependency array includes apiUrl to re-fetch data when it changes

  return (
    <div>
      <h2></h2>
      <p>{displayName}</p>
    </div>
  );
};

const UserDataFetcher = () => {
  return (
    <>
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=410846" />
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=436966" />
      <UserDataComponent apiUrl="https://api.neynar.com/v1/farcaster/user/?api_key=NEYNAR_API_DOCS&viewerFid=-1&fid=408268" />
    </>
  );
};

export default UserDataFetcher;
