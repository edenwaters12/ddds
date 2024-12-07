import React, { useEffect, useState } from 'react';
// Import FingerprintJS library
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const FingerprintComponent = () => {
  const [fingerprintDetails, setFingerprintDetails] = useState(null);

  useEffect(() => {
    // Initialize FingerprintJS and get the unique identifier for the device
    const getFingerprint = async () => {
      const fp = await FingerprintJS.load(); // Load the FingerprintJS script
      const result = await fp.get(); // Get the full fingerprint details

      // Set the fingerprint details to state
      setFingerprintDetails(result);

      // Log the full details to the console
      console.log('Full Fingerprint Details:', result);
    };

    getFingerprint();
  }, []);

  return (
    <div>
      <h1>FingerprintJS Integration</h1>
      {fingerprintDetails ? (
        <div>
          <p><strong>Your unique device fingerprint ID:</strong> {fingerprintDetails.visitorId}</p>
          <p><strong>Device OS:</strong> {fingerprintDetails.os}</p>
          <p><strong>Browser:</strong> {fingerprintDetails.browser}</p>
          <p><strong>Device Type:</strong> {fingerprintDetails.device}</p>
          <p><strong>Full Components:</strong></p>
          <pre>{JSON.stringify(fingerprintDetails.components, null, 2)}</pre>
        </div>
      ) : (
        <p>Generating fingerprint...</p>
      )}
    </div>
  );
};

export default FingerprintComponent;
