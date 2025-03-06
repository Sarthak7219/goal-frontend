import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_team_member_detail } from "../api/endpoints";

function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await get_team_member_detail(id);
        setProfile(data);
      } catch (error) {
        alert("Error fetching member data");
        // console.log("Error fetching about data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="profile-detail-container">
      <div
        className="page-hero"
        id="profile-bg"
        style={{
          background: `
          linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),
          url(${profile.bg_image}) no-repeat center center / cover
        `,
        }}
      ></div>
      <div className="name-section">
        <img src={profile.image} alt="" />
        <div className="profile-heading">
          <h2>{profile.name}</h2>
          <h5>{profile.organisation}</h5>
          <p>{profile.position}</p>
        </div>
      </div>
      <div className="detail-section">
        <div className="imp-detail">
          <ul>
            <li>
              <h4>Country</h4>
              <p>{profile.country}</p>
            </li>
            <li>
              <h4>Organisation</h4>
              <p>{profile.organisation}</p>
            </li>
            <li>
              <h4>Email</h4>
              <p>{profile.email}</p>
            </li>
            {profile.apn_profile_link && (
              <li>
                <a
                  href={profile.apn_profile_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APN Profile
                </a>
              </li>
            )}
            {profile.website_link && (
              <li>
                <a
                  href={profile.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="detail-desc">{profile.description}</div>
      </div>
    </div>
  );
}

export default ProfileDetail;
