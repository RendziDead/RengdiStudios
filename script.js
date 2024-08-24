document.addEventListener('DOMContentLoaded', function () {
    var languageSwitcher = document.getElementById('languageSwitcher');

    if (!languageSwitcher) {
        console.error('�� ������ ������� � id "languageSwitcher". ��������� ������� ����� �������� � ����� HTML.');
        return;
    }

    // ���������� ������� ���� � ������������� ��������������� �������� � select
    var currentUrl = window.location.href;
    var currentLanguage = 'ru'; // �� ��������� �������

    if (currentUrl.includes('index-pl.html')) {
        currentLanguage = 'pl';
    } else if (currentUrl.includes('index-en.html')) {
        currentLanguage = 'en';
    } else if (currentUrl.includes('index-ua.html')) {
        currentLanguage = 'ua';
    }

    languageSwitcher.value = currentLanguage;

    // ��������� ����������� ������� change
    languageSwitcher.addEventListener('change', function () {
        var selectedLanguage = this.value;

        // ���������, �� �������� �� ������������ ������� ��� ������� ����
        if (selectedLanguage !== currentLanguage) {
            if (selectedLanguage === 'ru') {
                window.location.replace('index.html');  // ���������� replace ��� ����� ������� ���������
            } else if (selectedLanguage === 'pl') {
                window.location.replace('index-pl.html');
            }
            else if (selectedLanguage === 'en') {
                window.location.replace('index-en.html');
            }
            else if (selectedLanguage === 'ua') {
                window.location.replace('index-ua.html');
            }
        }
    });
});

