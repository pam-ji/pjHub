
import torch
import torch.nn as nn
import torch.nn.functional as F

class GameAI(nn.Module):
    def __init__(self):
        super(GameAI, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, 3)
        self.conv2 = nn.Conv2d(32, 64, 3)
        self.fc1 = nn.Linear(64*62*62, 512)
        self.fc2 = nn.Linear(512, 10) # Number of possible actions
        
    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.relu(self.conv2(x))
        x = x.view(-1, 64*62*62)
        x = F.relu(self.fc1(x))
        return F.softmax(self.fc2(x), dim=1)
