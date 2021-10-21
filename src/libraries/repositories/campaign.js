function CampaignRepository() {
  const fetchData = async () => {
    const response = await fetch('hit-api-nya-apa', {
      method: 'get',
    });

    const data = await response.json();
    return data;
  };

  return {
    fetchData,
  };
}

export default CampaignRepository();
