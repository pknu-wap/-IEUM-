import React from 'react';
import * as Styled from './CategoryButtonList.styles';
import iconAll from '@/assets/images/icon_all.png';
import iconVolunteer from '@/assets/images/icon_volunteer.png';
import iconReligion from '@/assets/images/icon_religion.png';
import iconHobby from '@/assets/images/icon_hobby.png';
import iconAcademic from '@/assets/images/icon_academic.png';
import iconSport from '@/assets/images/icon_sport.png';
import iconPerformance from '@/assets/images/icon_performance.png';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryButtonListProps {
  onCategorySelect: (division: string) => void;
}

const clubCategories: Category[] = [
  { id: 'all', name: '전체', icon: iconAll },
  { id: 'volunteering', name: '봉사', icon: iconVolunteer },
  { id: 'religion', name: '종교', icon: iconReligion },
  { id: 'hobby', name: '취미교양', icon: iconHobby },
  { id: 'study', name: '학술', icon: iconAcademic },
  { id: 'sport', name: '운동', icon: iconSport },
  { id: 'performance', name: '공연', icon: iconPerformance },
];

const CategoryButtonList = ({ onCategorySelect }: CategoryButtonListProps) => {
  return (
    <Styled.CategoryButtonContainer>
      {clubCategories.map((category) => (
        <Styled.CategoryButton
          key={category.id}
          onClick={() => onCategorySelect(category.id)}>
          <img src={category.icon} alt={category.name} />
          <span>{category.name}</span>
        </Styled.CategoryButton>
      ))}
    </Styled.CategoryButtonContainer>
  );
};

export default CategoryButtonList;
